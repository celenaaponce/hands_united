import GridItem from "./grid-item";
import classes from "./content-grid.module.css";
import { promises as fs } from "fs";
import path from 'path';
export default async function ContentGrid({source}) {
    const filePath = path.join(process.cwd(), source);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);

      
  return (
    <ul className={classes.grids}>
      {data.map((grid) => (
        <li key={grid.name}>
          <GridItem {...grid} />
        </li>
      ))}
    </ul>
  );
}