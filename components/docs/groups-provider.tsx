"use client"

import { createContext, useContext } from "react"

import type { Group } from "../layout/wrapper"

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
