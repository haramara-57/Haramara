import { type RouteConfig, index, layout, route} from "@react-router/dev/routes";

export default [
    layout("routes/admin/admin-layout.tsx",[
        index("routes/admin/dashboard.tsx"),
        route("users", "routes/admin/users.tsx"),
        route("activities", "routes/admin/activities.tsx"),
        route("courses", "routes/admin/courses.tsx"),
        route("products", "routes/admin/products.tsx")
    ])
] satisfies RouteConfig;