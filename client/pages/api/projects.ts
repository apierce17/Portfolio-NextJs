const fetchProjects = async () => {
    const response = await fetch(
      `https://apierce-portfolio-payload.herokuapp.com/api/projects`
    );
    const data = await response.json();
    return data;
};

export default async function handler(req: any, res: any) {
  res.status(200).json(await fetchProjects());
}