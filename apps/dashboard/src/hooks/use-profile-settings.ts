import { useState } from "react";

export interface ConnectedAccount {
  provider: "github" | "gitlab" | "bitbucket";
  username?: string;
  connected: boolean;
}

export interface UserOrganization {
  id: string;
  name: string;
  role: string;
}

export function useProfileSettings() {
  // General State
  const [name, setName] = useState("DyzulkDev");
  const [email, setEmail] = useState("dyzulkdeveloper@gmail.com");

  // Security State
  const [tfaEnabled, setTfaEnabled] = useState(false);
  const [isPasswordResetSent, setIsPasswordResetSent] = useState(false);

  // Source Control State
  const [connectedAccounts, setConnectedAccounts] = useState<ConnectedAccount[]>([
    { provider: "github", username: "dyzulk", connected: true },
    { provider: "gitlab", connected: false },
    { provider: "bitbucket", connected: false },
  ]);

  // Organizations State
  const [userOrgs, setUserOrgs] = useState<UserOrganization[]>([
    { id: "org-1", name: "DyzulkDev", role: "Admin" },
  ]);

  // Notifications State
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifySecurity, setNotifySecurity] = useState(true);
  const [notifyUpdates, setNotifyUpdates] = useState(false);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", { name, email });
  };

  const handleResetPassword = () => {
    setIsPasswordResetSent(true);
    setTimeout(() => {
      setIsPasswordResetSent(false);
    }, 5000);
  };

  const handleConnectProvider = (provider: "github" | "gitlab" | "bitbucket") => {
    setConnectedAccounts(
      connectedAccounts.map((account) =>
        account.provider === provider
          ? { ...account, connected: true, username: "dyzulk" }
          : account
      )
    );
  };

  const handleDisconnectProvider = (provider: "github" | "gitlab" | "bitbucket") => {
    setConnectedAccounts(
      connectedAccounts.map((account) =>
        account.provider === provider
          ? { ...account, connected: false, username: undefined }
          : account
      )
    );
  };

  const handleLeaveOrganization = (orgId: string) => {
    setUserOrgs(userOrgs.filter((org) => org.id !== orgId));
  };

  const handleDeactivateAccount = () => {
    console.log("Account deactivation triggered");
  };

  return {
    name,
    setName,
    email,
    setEmail,
    tfaEnabled,
    setTfaEnabled,
    isPasswordResetSent,
    connectedAccounts,
    userOrgs,
    notifyEmail,
    setNotifyEmail,
    notifySecurity,
    setNotifySecurity,
    notifyUpdates,
    setNotifyUpdates,
    handleUpdateProfile,
    handleResetPassword,
    handleConnectProvider,
    handleDisconnectProvider,
    handleLeaveOrganization,
    handleDeactivateAccount,
  };
}
