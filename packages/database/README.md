# `@workspace/database`

Package ini mengelola skema database, migrasi database, dan penyediaan Drizzle Client untuk aplikasi di dalam monorepo.

## Teknologi Utama
- **Drizzle ORM** sebagai TypeScript ORM yang ringan dan type-safe.
- **PostgreSQL** sebagai database relational utama.
- **Drizzle Kit** untuk manajemen migrasi database secara deklaratif.

---

## Struktur Direktori

```
packages/database/
├── drizzle/              # File migrasi SQL hasil generate
├── src/
│   ├── schema/           # Definisi tabel database (Drizzle Schema)
│   │   ├── auth.ts       # Akun, Profil, Sesi, OAuth, Staff
│   │   ├── organization.ts # Organisasi, Anggota, Billing
│   │   ├── project.ts    # Proyek per Organisasi
│   │   ├── service.ts    # Sub-layanan (database, cache, dll.)
│   │   └── index.ts      # Entrypoint ekspor skema
│   └── db.ts             # Inisialisasi Drizzle Client
├── drizzle.config.ts     # Konfigurasi Drizzle Kit
└── package.json
```

---

## Skrip yang Tersedia

Jalankan perintah ini menggunakan `pnpm` dari root workspace atau langsung di dalam folder package:

### 1. `pnpm db:generate`
Membuat file migrasi SQL baru berdasarkan perubahan skema di folder `src/schema/`.
```bash
pnpm --filter @workspace/database db:generate
```

### 2. `pnpm db:push`
Mendorong (*push*) perubahan skema secara langsung ke database tujuan tanpa membuat file migrasi (sangat cocok untuk tahap pengembangan/development lokal).
```bash
pnpm --filter @workspace/database db:push
```

### 3. `pnpm db:studio`
Membuka antarmuka Drizzle Studio di browser untuk melihat, mengedit, dan mengeksplorasi data tabel secara GUI.
```bash
pnpm --filter @workspace/database db:studio
```

---

## Penggunaan Drizzle Client

Untuk menggunakannya di package atau aplikasi lain dalam workspace:

```typescript
import { db } from "@workspace/database";
import { accounts, sessions } from "@workspace/database/schema";

// Contoh query: Mendapatkan sesi aktif beserta akunnya
const activeSessions = await db.query.sessions.findMany({
  with: {
    account: true,
  },
});
```

---

## Skema Relasi Database (ERD)

Berikut adalah diagram hubungan entitas (ERD) dari skema database saat ini (dapat langsung dirender di GitHub menggunakan format Mermaid):

```mermaid
erDiagram
    %% Auth & User Management
    accounts {
        uuid id PK
        text email UK
        timestamp_tz created_at
        timestamp_tz updated_at
    }

    oauth_accounts {
        uuid id PK
        uuid account_id FK
        text provider_id
        text provider_user_id
        timestamp_tz created_at
    }

    accounts_profile {
        uuid id PK
        uuid account_id FK
        text first_name
        text last_name
        text phone_number
        text avatar_url
        timestamp_tz created_at
        timestamp_tz updated_at
    }

    staffs {
        uuid id PK
        text email UK
        text password_hash
        text role
        timestamp_tz created_at
        timestamp_tz updated_at
    }

    staff_profiles {
        uuid id PK
        uuid staff_id FK
        text first_name
        text last_name
        timestamp_tz created_at
        timestamp_tz updated_at
    }

    verification_tokens {
        uuid id PK
        text identifier
        text token
        timestamp_tz expires_at
        timestamp_tz created_at
    }

    sessions {
        text id PK
        uuid account_id FK
        timestamp_tz expires_at
        text user_agent
        text ip_address
        timestamp_tz created_at
    }

    %% Organization & Workspace
    organizations {
        uuid id PK
        text name
        text slug UK
        timestamp_tz created_at
        timestamp_tz updated_at
    }

    members {
        uuid id PK
        uuid organization_id FK
        uuid account_id FK
        text role
        timestamp_tz created_at
        timestamp_tz updated_at
    }

    billing_infos {
        uuid id PK
        uuid organization_id FK "UK"
        text stripe_customer_id
        text stripe_subscription_id
        text plan
        text billing_email
        timestamp_tz created_at
        timestamp_tz updated_at
    }

    %% Projects & Services
    projects {
        uuid id PK
        uuid organization_id FK
        text name
        text slug
        timestamp_tz created_at
        timestamp_tz updated_at
    }

    sub_services {
        uuid id PK
        uuid project_id FK
        text type
        text name
        text slug
        text status
        text config
        timestamp_tz created_at
        timestamp_tz updated_at
    }

    %% Relationships
    accounts ||--o{ oauth_accounts : "has oauth logins"
    accounts ||--o| accounts_profile : "has profile"
    accounts ||--o{ members : "is member of"
    accounts ||--o{ sessions : "has sessions"
    
    staffs ||--o| staff_profiles : "has profile"

    organizations ||--o{ members : "has members"
    organizations ||--o| billing_infos : "has billing info"
    organizations ||--o{ projects : "has projects"

    projects ||--o{ sub_services : "contains"
```
