<script lang="ts">
export const description = "A sidebar that collapses to icons."
export const iframeHeight = "800px"
export const containerClass = "w-full h-full"
</script>

<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue"
import NavUser from "@/components/NavUser.vue"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
}
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>

      <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4 justify-between">
        <SidebarTrigger class="-ml-1" />
        <div>
          <NavUser :user="data.user" />
        </div>
      </header>
      <div class="p-4">
        <RouterView />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
