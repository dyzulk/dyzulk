# Strict Modularity & File Organization Rules

To prevent code clutter, maintain clean architecture, and enforce consistency across all applications (`web`, `docs`, and `dashboard`), you MUST follow these strict file organization guidelines:

## 1. Separation of Logic and Presentation

- **DO NOT define types, helper functions, hooks, or API client actions inline** inside layout, page, or UI component files.
- **Dilarang Keras Menulis Logic (Strict UI-Only):** Layout, page, dan UI component files **tidak boleh** mengandung logika aplikasi, fungsi manipulasi state, penulisan event handler secara langsung (kecuali sekadar memanggil handler yang didapatkan dari hook/props), pemanggilan API, ataupun kalkulasi data kompleks. File-file tersebut didekasikan **hanya khusus untuk presentasi UI dan komposisi tata letak (rendering shell)**. Logika tersebut wajib didelegasikan ke custom hooks atau modul eksternal.
- Everything that is not directly related to layout composition or UI rendering must be extracted into specialized, modular files and folders.

## 2. Directory Structure Conventions

Always use the following folder layout for utilities, types, and custom logic:
- **`types/`**: All TypeScript interface and type definitions.
- **`lib/`**: General helper methods, utility functions, configuration setups, and API/DB clients.
- **`hooks/`**: React custom hooks.
- **`actions/`**: Next.js Server Actions or asynchronous API logic.

## 3. Strict Enforcements

- **No Exception for Size:** Even if a helper function or custom type consists of a single function or only 3 lines of code, it MUST be extracted to a separate file within the correct directory structure (`types/`, `lib/`, `hooks/`, etc.). 
- **Keep Components Clean**: Page and component files must remain declarative, clean, and focused solely on composition and presentation.
- **Dilarang Menulis Kode UI di `page.tsx`**: Setiap file `page.tsx` dilarang keras menulis kode UI atau tata letak HTML/JSX yang mendalam secara inline. Seluruh elemen visual, section, ataupun form wajib diisolasi ke dalam sub-komponen pada folder komponen yang sesuai dengan nama halaman/modulnya (misalnya komponen untuk `apps/web/src/app/(home)/page.tsx` ditempatkan terisolasi di bawah `apps/web/src/components/home/`). File `page.tsx` hanya bertindak sebagai shell orkestrasi pemanggilan sub-komponen tersebut.
