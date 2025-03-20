const routes = {
    home: "/",
    admin: "/admin",
    users: "/users",
}

type RouteKeys = keyof typeof routes // ["/home" | "/admin" | "/users"]

type Route = (typeof routes)[RouteKeys]
// type Route = (typeof routes)[keyof typeof routes]

// const goToRoute = (route: "/" | "admin" | "/users") => { }

const goToRoute = (route: Route) => { }

goToRoute(routes.admin)

export {}