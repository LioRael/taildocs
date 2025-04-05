"use client"

import { createContext, useContext } from "react"

export type GroupItem = {
  label: string
  href: string
  items?: Array<GroupItem>
}

export type Group = {
  label: string
  items: Array<GroupItem>
}
export const GroupsContext = createContext<Array<Group>>([])

export function GroupsProvider({
  groups,
  children,
}: React.PropsWithChildren<{ groups: Array<Group> }>) {
  return (
    <GroupsContext.Provider value={groups}>{children}</GroupsContext.Provider>
  )
}

export function useGroups() {
  return useContext(GroupsContext)
}
