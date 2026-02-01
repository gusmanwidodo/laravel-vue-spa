<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Calendar,
  ChartArea,
  ChartBar,
  Cog,
  Command,
  FileCheck,
  Frame,
  GalleryVerticalEnd,
  House,
  LayoutDashboard,
  ListCheck,
  Map,
  PieChart,
  Receipt,
  Settings2,
  SquareTerminal,
  User,
  Users,
} from "lucide-vue-next"
import NavMain from '@/components/NavMain.vue'
import NavProjects from '@/components/NavProjects.vue'
import NavUser from '@/components/NavUser.vue'
import TeamSwitcher from '@/components/TeamSwitcher.vue'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { R } from 'vue-router/dist/index-DvGaX1AX.mjs'
import { dashboard } from '@/routes'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
})

// This is sample data.
const data = {
  dashboard: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
  ],
  operations: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Properties",
      url: "#",
      icon: House,
    },
    {
      title: "Guests",
      url: "#",
      icon: Users,
    },
  ],
  transactions: [
    {
      title: "Bookings",
      url: "#",
      icon: FileCheck,
    },
    {
      title: "Settlements",
      url: "#",
      icon: Receipt,
    },
  ],
  settings: [
    {
      title: "Users",
      url: "#",
      icon: User,
    },
    {
      title: "Settings",
      url: "#",
      icon: Cog,
    },
  ],
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <a href="#">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd class="size-4" />
              </div>
              <div class="flex flex-col gap-0.5 leading-tight">
                <span class="font-medium text-2xl">My Brand</span>
              </div>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <NavMain title="" :items="data.dashboard" />
      <NavMain title="Services" :items="data.operations" />
      <NavMain title="Transactions" :items="data.transactions" />
      <NavMain title="Settings" :items="data.settings" />
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>
