import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button, {IButtonProps} from "./Button";
import React from "react";

export interface ICrudPageProps {
  entitySingularName: string;
  entityPluralName: string;
  listTitle?: string;
  entityArray: any[];
  dataGridColumnDefs: GridColDef[];
  createButtonText?: string
  buttonOnClick?: IButtonProps["onClick"]
}

/**
 * This component contains a mui data grid,
 * a form with formik to create the entity,
 * and also handles all the data fetching and creations
 *
 */
const CrudViewPage: React.FC<ICrudPageProps> = ({
  entityArray,
  dataGridColumnDefs,
  entityPluralName,
  entitySingularName,
  createButtonText=`add a new ${entitySingularName}`,
  listTitle: title=`List of ${entityPluralName}`,
  ...props
}) => {
  type entityType = (typeof entityArray)[0];
  return (
    <>
      <div className="flex justify-between items-center">
      <h1 className="text-3xl">{title}</h1>
      <Button onClick={props.buttonOnClick}>{createButtonText}</Button>
      </div>
      <DataGrid columns={dataGridColumnDefs} rows={entityArray} />
    </>
  );
};

export default CrudViewPage;
