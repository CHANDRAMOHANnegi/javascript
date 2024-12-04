const topNavigationMenu = [
  {
    id: "menu-1",
    label: "Home",
    path: "/",
    type: "main",
    icon: "fa fa-home",
  },
  {
    id: "menu-2",
    label: "Shop",
    path: "/shop",
    type: "main",
    icon: "fa fa-shopping-bag",
    subMenu: [
      {
        id: "submenu-2-1",
        label: "Men",
        path: "/shop/men",
        type: "category",
        icon: "fa fa-male",
        subMenu: [
          {
            id: "submenu-2-1-1",
            label: "Clothing",
            path: "/shop/men/clothing",
            type: "subcategory",
            subMenu: [
              { id: "submenu-2-1-1-1", label: "T-Shirts", path: "/shop/men/clothing/t-shirts", type: "item" },
              { id: "submenu-2-1-1-2", label: "Shirts", path: "/shop/men/clothing/shirts", type: "item" },
              { id: "submenu-2-1-1-3", label: "Jackets", path: "/shop/men/clothing/jackets", type: "item" },
            ],
          }, {
            id: "submenu-2-1-2",
            label: "Accessories",
            path: "/shop/men/accessories",
            type: "subcategory",
            subMenu: [
              { id: "submenu-2-1-2-1", label: "Watches", path: "/shop/men/accessories/watches", type: "item" },
              { id: "submenu-2-1-2-2", label: "Belts", path: "/shop/men/accessories/belts", type: "item" },
              { id: "submenu-2-1-2-3", label: "Sunglasses", path: "/shop/men/accessories/sunglasses", type: "item" },
            ],
          },
        ],
      },
      {
        id: "submenu-2-2",
        label: "Women",
        path: "/shop/women",
        type: "category",
        icon: "fa fa-female",
        subMenu: [
          {
            id: "submenu-2-2-1",
            label: "Clothing",
            path: "/shop/women/clothing",
            type: "subcategory",
            subMenu: [
              { id: "submenu-2-2-1-1", label: "Dresses", path: "/shop/women/clothing/dresses", type: "item" },
              { id: "submenu-2-2-1-2", label: "Tops", path: "/shop/women/clothing/tops", type: "item" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "menu-3",
    label: "Deals",
    path: "/deals",
    type: "main",
    icon: "fa fa-tags",
    badge: "Hot",
    isHighlighted: true,
  },
  {
    id: "menu-4",
    label: "Brands",
    path: "/brands",
    type: "main",
    isHighlighted: true,
    icon: "fa fa-star",
    subMenu: [
      { id: "submenu-4-1", label: "Nike", path: "/brands/nike", type: "brand", icon: "fa fa-bolt" },
      { id: "submenu-4-2", label: "Adidas", path: "/brands/adidas", type: "brand", icon: "fa fa-check-circle" },
      { id: "submenu-4-3", label: "Puma", path: "/brands/puma", type: "brand", icon: "fa fa-paw" },
    ],
  },
  {
    id: "menu-5",
    label: "About Us",
    path: "/about",
    type: "main",
    icon: "fa fa-info-circle",
  },
  {
    id: "menu-6",
    label: "Contact",
    path: "/contact",
    type: "main",
    icon: "fa fa-envelope",
  },
  {
    id: "menu-7",
    label: "Help",
    path: "/help",
    type: "main",
    icon: "fa fa-question-circle",
    subMenu: [
      { id: "submenu-7-1", label: "FAQ", path: "/help/faq", type: "help", icon: "fa fa-lightbulb" },
      { id: "submenu-7-2", label: "Shipping Info", path: "/help/shipping", type: "help", icon: "fa fa-truck" },
      { id: "submenu-7-3", label: "Return Policy", path: "/help/returns", type: "help", icon: "fa fa-undo" },
    ],
  },
  {
    id: "menu-8",
    label: "Profile",
    path: "/profile",
    type: "user",
    icon: "fa fa-user-circle",
    subMenu: [
      { id: "submenu-8-1", label: "Orders", path: "/profile/orders", type: "user-action", icon: "fa fa-list-alt" },
      { id: "submenu-8-2", label: "Wishlist", path: "/profile/wishlist", type: "user-action", icon: "fa fa-heart" },
      { id: "submenu-8-3", label: "Logout", path: "/profile/logout", type: "user-action", icon: "fa fa-sign-out-alt" },
    ],
  },
];

export default topNavigationMenu;
