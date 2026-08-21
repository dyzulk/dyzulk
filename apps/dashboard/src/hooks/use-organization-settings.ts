import { useState } from "react";

export interface Member {
  id: string;
  name: string;
  email: string;
  role: "admin" | "developer";
  isYou?: boolean;
}

export interface InvoiceItem {
  id: string;
  period: string;
  date: string;
  amount: number;
  status: "upcoming" | "paid";
}

export interface ApiTokenItem {
  id: string;
  name: string;
  token?: string;
  createdAt: string;
}

export function useOrganizationSettings(orgSlug: string) {
  // General State
  const [orgName, setOrgName] = useState("DyzulkDev");
  const [orgHandle, setOrgHandle] = useState("dyzulkdev");
  const [enforce2fa, setEnforce2fa] = useState(false);

  // Access State
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("developer");
  const [members, setMembers] = useState<Member[]>([
    {
      id: "mem-1",
      name: "DyzulkDev",
      email: "dyzulkdeveloper@gmail.com",
      role: "admin",
      isYou: true,
    },
  ]);

  // Billing State
  const [billType, setBillType] = useState("individual");
  const [billingName, setBillingName] = useState("DyzulkDev");
  const [billingEmail, setBillingEmail] = useState("dyzulkdeveloper@gmail.com");
  const [spendingLimit, setSpendingLimit] = useState<number | null>(null);
  const [spendingLimitInput, setSpendingLimitInput] = useState("5.00");
  const [isSpendingLimitModalOpen, setIsSpendingLimitModalOpen] = useState(false);

  // Invoices State
  const invoices: InvoiceItem[] = [
    {
      id: "inv-upcoming",
      period: "Jul 22 2026 - Aug 21 2026",
      date: "Aug 24 2026",
      amount: 0.01,
      status: "upcoming",
    },
  ];

  // API Tokens State
  const [apiTokens, setApiTokens] = useState<ApiTokenItem[]>([]);
  const [isNewTokenSheetOpen, setIsNewTokenSheetOpen] = useState(false);
  const [newTokenName, setNewTokenName] = useState("");
  const [selectedScopes, setSelectedScopes] = useState<string[]>([]);
  const [generatedToken, setGeneratedToken] = useState<string | null>(null);

  const handleUpdateGeneral = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated general settings:", { orgName, orgHandle, enforce2fa });
  };

  const handleDeleteOrganization = () => {
    console.log("Delete organization triggered");
  };

  const handleSendInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;
    const newMember: Member = {
      id: `mem-${Date.now()}`,
      name: inviteEmail.split("@")[0] ?? "",
      email: inviteEmail,
      role: inviteRole as "admin" | "developer",
    };
    setMembers([...members, newMember]);
    setInviteEmail("");
  };

  const handleRoleChange = (memberId: string, role: "admin" | "developer") => {
    setMembers(
      members.map((m) => (m.id === memberId ? { ...m, role } : m))
    );
  };

  const handleSaveBilling = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saved billing details:", { billType, billingName, billingEmail });
  };

  const handleSaveSpendingLimit = (e: React.FormEvent) => {
    e.preventDefault();
    const limit = parseFloat(spendingLimitInput);
    if (!isNaN(limit)) {
      setSpendingLimit(limit);
    }
    setIsSpendingLimitModalOpen(false);
  };

  const handleCreateToken = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTokenName) return;
    
    // Simulate generation of a raw secret token
    const tokenSecret = `dyz_live_${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}`;
    
    const newToken: ApiTokenItem = {
      id: `tok-${Date.now()}`,
      name: newTokenName,
      createdAt: "Just now",
    };

    setApiTokens([...apiTokens, newToken]);
    setGeneratedToken(tokenSecret);
    setNewTokenName("");
    setSelectedScopes([]);
  };

  const toggleScope = (scope: string) => {
    if (selectedScopes.includes(scope)) {
      setSelectedScopes(selectedScopes.filter((s) => s !== scope));
    } else {
      setSelectedScopes([...selectedScopes, scope]);
    }
  };

  return {
    orgName,
    setOrgName,
    orgHandle,
    setOrgHandle,
    enforce2fa,
    setEnforce2fa,
    inviteEmail,
    setInviteEmail,
    inviteRole,
    setInviteRole,
    members,
    billType,
    setBillType,
    billingName,
    setBillingName,
    billingEmail,
    setBillingEmail,
    spendingLimit,
    spendingLimitInput,
    setSpendingLimitInput,
    isSpendingLimitModalOpen,
    setIsSpendingLimitModalOpen,
    invoices,
    apiTokens,
    isNewTokenSheetOpen,
    setIsNewTokenSheetOpen,
    newTokenName,
    setNewTokenName,
    selectedScopes,
    generatedToken,
    setGeneratedToken,
    handleUpdateGeneral,
    handleDeleteOrganization,
    handleSendInvite,
    handleRoleChange,
    handleSaveBilling,
    handleSaveSpendingLimit,
    handleCreateToken,
    toggleScope,
  };
}
