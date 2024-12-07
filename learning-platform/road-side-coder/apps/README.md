```javascript

Updating handleScroll Dependency: When using debounce, handleScroll should have loading as a dependency in useEffect to avoid stale state.
    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);


```