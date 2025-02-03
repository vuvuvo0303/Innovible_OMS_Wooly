import * as React from "react";
import { ChartPie, CircleUserRound, RectangleEllipsis, Store } from "lucide-react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Wooly_logo from "@/assets/images/wooly_logo.png";
const data = {
  user: {
    name: "Admin",
    email: "admin@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Tổng quan",
      url: "/dashboard",
      icon: ChartPie,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Cửa hàng",
      url: "/product",
      icon: Store,
      isActive: true,
      items: [
        {
          title: "Sản phẩm",
          url: "/product",
        },
        {
          title: "Đơn đặt hàng",
          url: "/order",
        },
        {
          title: "Danh mục hàng hóa",
          url: "/category",
        },
        // {
        //   title: "Thương hiệu",
        //   url: "/brand",
        // },
        {
          title: "Giảm giá, ưu đãi",
          url: "/sale",
        },
        // {
        //   title: "Carousel",
        //   url: "/carousel",
        // },
        {
          title: "Phương thức vận chuyển",
          url: "/shipment",
        },
      ],
    },
    {
      title: "Người dùng",
      url: "/user",
      icon: CircleUserRound,
      isActive: true,
      items: [
        {
          title: "Tài khoản",
          url: "/user",
        },
        {
          title: "Nhân viên",
          url: "/user/staff",
        },
        {
          title: "Khách hàng",
          url: "/user/customer",
        },
      ],
    },
    {
      title: "Khác",
      url: "#",
      icon: RectangleEllipsis,
      items: [
        {
          title: "Blog",
          url: "/blog",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex gap-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
              <img src={Wooly_logo} className="size-11" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">Innovibe OMS</span>
              <span className="truncate text-blue-300 text-xs">Wooly studio</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
