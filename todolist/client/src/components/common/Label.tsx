type LabelProps = {
  label: string;
  htmlFor: string;
};

function Label({ label, htmlFor }: LabelProps) {
  return <label htmlFor={htmlFor}>{label}</label>;
}

export default Label;
