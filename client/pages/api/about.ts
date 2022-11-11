const fetchAbout = async () => {
    const response = await fetch(
      `https://apierce-portfolio-payload.herokuapp.com/api/posts/6349a6f5de7fa08b99ba9832`
    );
    const data = await response.json();
    return data;
};

export default async function handler(req: any, res: any) {
  res.status(200).json(await fetchAbout());
}