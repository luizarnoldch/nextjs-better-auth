'use client';

import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';
import type {
  ListMembersInput,
  GetFullOrganizationInput,
  CheckSlugInput,
  ListInvitationsInput,
  GetInvitationInput,
  ListTeamsInput,
  HasPermissionInput,
  ListRolesInput,
  GetRoleInput,
} from '../schema/organization.schema';

export const useListOrganizations = () => {
  const trpc = useTRPC();
  return useQuery(trpc.organization.list.queryOptions());
};

export const useGetFullOrganization = (input: GetFullOrganizationInput) => {
  const trpc = useTRPC();
  return useQuery(trpc.organization.getFull.queryOptions(input));
};

export const useCheckSlug = (input: CheckSlugInput) => {
  const trpc = useTRPC();
  return useQuery(trpc.organization.checkSlug.queryOptions(input));
};

export const useListMembers = (input: ListMembersInput) => {
  const trpc = useTRPC();
  return useQuery(trpc.organization.member.list.queryOptions(input));
};

export const useGetActiveMember = () => {
  const trpc = useTRPC();
  return useQuery(trpc.organization.member.getActive.queryOptions());
};

export const useListInvitations = (input: ListInvitationsInput) => {
  const trpc = useTRPC();
  return useQuery(trpc.organization.invitation.list.queryOptions(input));
};

export const useGetInvitation = (input: GetInvitationInput) => {
  const trpc = useTRPC();
  return useQuery(trpc.organization.invitation.get.queryOptions(input));
};

export const useListMyInvitations = () => {
  const trpc = useTRPC();
  return useQuery(trpc.organization.invitation.listMine.queryOptions());
};

export const useListTeams = (input: ListTeamsInput) => {
  const trpc = useTRPC();
  return useQuery(trpc.organization.team.list.queryOptions(input));
};

export const useHasPermission = (input: HasPermissionInput) => {
  const trpc = useTRPC();
  return useQuery(trpc.organization.permission.has.queryOptions(input));
};

export const useListRoles = (input: ListRolesInput) => {
  const trpc = useTRPC();
  return useQuery(trpc.organization.role.list.queryOptions(input));
};

export const useGetRole = (input: GetRoleInput) => {
  const trpc = useTRPC();
  return useQuery(trpc.organization.role.get.queryOptions(input));
};
