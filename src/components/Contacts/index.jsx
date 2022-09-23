import { SectionContacts } from "./style";

function Contacts({ name, email, phone }) {
  return (
    <SectionContacts>
      <h1>Nome: {name}</h1>
      <p>Email: {email}</p>
      <p>Telefone: {phone}</p>
    </SectionContacts>
  );
}
export default Contacts;
