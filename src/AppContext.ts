import { createContext } from 'react';
import { IUserDetails } from './IUserDetails';

interface IAppContext {
    username: string;
    user: IUserDetails;
    updateUsername: (name: string) => void;
}

let inst: IAppContext = {
    username: "",
    user: { firstname: "", lastname: ""},
    updateUsername: () => {}
}

const AppContext = createContext<IAppContext>(inst);

export default AppContext;
