import { useElements } from 'state/elementsContext';
import { CONFIG_ID } from 'utils/constants';

function useConfig() {
  const [elements] = useElements();
  return elements.find((el) => el.id === CONFIG_ID);
}

export default useConfig;
