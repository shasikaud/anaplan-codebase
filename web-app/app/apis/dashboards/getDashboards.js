const getDashboards = async() => {
    try {
        const resp = await fetch('/api/dashboards');
        if (resp.status !== 200) throw new Error('Failed to fetch dashboards');
        return { data: await resp.json() };
    } catch (error) {
        console.error(error);
        return { error };
    }
}

export default getDashboards