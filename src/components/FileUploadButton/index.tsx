import React from "react";
import { ICONS_MAP } from '../../constants/icons';
import { Container, Input, Label } from "./styled";

interface IFile  {
  className?: string;
  name?: string;
}

const FileUploadButton = ({className, name}:IFile) => {
  const [value, setValue] = React.useState('Expected Salary')

  const filterValue = (e:string) => {
    if (e) {
      const startIndex = (e.indexOf('\\') >= 0 ? e.lastIndexOf('\\') : e.lastIndexOf('/'));
      let filename = e.substring(startIndex);
      if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
          filename = filename.substring(1);
      }
      setValue(filename);
    }
  }
  console.log(value)
  return (
    <Container className={className}>
      <Label>
        <Input
          type="file"
          name={name}
          onChange={e => filterValue(e.target.value)}
          hidden
        />
        <ICONS_MAP.Clip />
        {value}
      </Label>
    </Container>
  );
  
}
export default FileUploadButton;