import { useOutletContext } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import HtmlAmbassyBloc from '../../../components/HtmlAmbassyBloc';

export default function InternationalCooperationPage() {
  const contextData = useOutletContext();
  const data = contextData['curiexplore-analyse'];

  const blocs = [];
  blocs.push(data.find((el) => (el.fields.thematique === "Politique d'attractivit√©")).fields || null);
  blocs.push(data.find((el) => (el.fields.thematique === 'Partenariats √©trangers')).fields || null);

  return (
    <>
      {blocs.map((bloc) => (
        <HtmlAmbassyBloc data={bloc} key={uuidv4()} />
      ))}
    </>
  );
}
