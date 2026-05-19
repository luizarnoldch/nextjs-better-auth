'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useTRPC } from '@/trpc/client';

export const useCreateOrganization = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  return useMutation(
    trpc.organization.create.mutationOptions({
      onSuccess: () => {
        toast.success('Organization created');
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useUpdateOrganization = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  return useMutation(
    trpc.organization.update.mutationOptions({
      onSuccess: () => {
        toast.success('Organization updated');
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useDeleteOrganization = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  return useMutation(
    trpc.organization.delete.mutationOptions({
      onSuccess: () => {
        toast.success('Organization deleted');
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useSetActiveOrganization = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  return useMutation(
    trpc.organization.setActive.mutationOptions({
      onSuccess: () => {
        toast.success('Active organization set');
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useUpdateMemberRole = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation(
    trpc.organization.member.updateRole.mutationOptions({
      onSuccess: async () => {
        toast.success('Member role updated');
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.getFull.queryKey(),
        });
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.member.list.queryKey(),
        });
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useRemoveMember = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  return useMutation(
    trpc.organization.member.remove.mutationOptions({
      onSuccess: () => {
        toast.success('Member removed');
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useLeaveOrganization = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  return useMutation(
    trpc.organization.member.leave.mutationOptions({
      onSuccess: () => {
        toast.success('Left organization');
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useInviteMember = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation(
    trpc.organization.invitation.invite.mutationOptions({
      onSuccess: async () => {
        toast.success('Invitation sent');
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.getFull.queryKey(),
        });
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.invitation.list.queryKey(),
        });
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useAcceptInvitation = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  return useMutation(
    trpc.organization.invitation.accept.mutationOptions({
      onSuccess: () => {
        toast.success('Invitation accepted');
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useCancelInvitation = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation(
    trpc.organization.invitation.cancel.mutationOptions({
      onSuccess: async () => {
        toast.success('Invitation cancelled');
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.getFull.queryKey(),
        });
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.invitation.list.queryKey(),
        });
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useRejectInvitation = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  return useMutation(
    trpc.organization.invitation.reject.mutationOptions({
      onSuccess: () => {
        toast.success('Invitation rejected');
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useCreateTeam = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation(
    trpc.organization.team.create.mutationOptions({
      onSuccess: async () => {
        toast.success('Team created');
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.team.list.queryKey({}),
        });
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useUpdateTeam = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation(
    trpc.organization.team.update.mutationOptions({
      onSuccess: async () => {
        toast.success('Team updated');
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.team.list.queryKey({}),
        });
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useRemoveTeam = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation(
    trpc.organization.team.remove.mutationOptions({
      onSuccess: async () => {
        toast.success('Team removed');
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.team.list.queryKey({}),
        });
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useAddTeamMember = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation(
    trpc.organization.team.addMember.mutationOptions({
      onSuccess: async () => {
        toast.success('Team member added');
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.team.list.queryKey({}),
        });
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useRemoveTeamMember = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation(
    trpc.organization.team.removeMember.mutationOptions({
      onSuccess: async () => {
        toast.success('Team member removed');
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.team.list.queryKey({}),
        });
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useSetActiveTeam = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  return useMutation(
    trpc.organization.team.setActive.mutationOptions({
      onSuccess: () => {
        toast.success('Active team set');
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useCreateRole = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation(
    trpc.organization.role.create.mutationOptions({
      onSuccess: async () => {
        toast.success('Role created');
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.role.list.queryKey(),
        });
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useUpdateRole = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation(
    trpc.organization.role.update.mutationOptions({
      onSuccess: async () => {
        toast.success('Role updated');
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.role.list.queryKey(),
        });
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

export const useDeleteRole = (opts?: { onSuccess?: () => void }) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation(
    trpc.organization.role.delete.mutationOptions({
      onSuccess: async () => {
        toast.success('Role deleted');
        await queryClient.invalidateQueries({
          queryKey: trpc.organization.role.list.queryKey(),
        });
        opts?.onSuccess?.();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};
