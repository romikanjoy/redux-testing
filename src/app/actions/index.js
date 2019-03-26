import { LOAD_MESSAGES } from './types';
import messages from '../../messages.json';

export function loadMessages() {
  return {
    type: LOAD_MESSAGES,
    messages
  };
}
