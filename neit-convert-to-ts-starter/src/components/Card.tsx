interface Style{
  display: string;
  fDirection?: string;
  width: number | string;
  alignItems: string;
  children: any;
}

export const Card = (props : Style) => {
  return (
    <div className="card" style={{display: props.display, width: props.width, alignItems: props.alignItems}}>
      {props.children}
    </div>
  );
};
