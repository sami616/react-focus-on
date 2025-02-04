import {exportSidecar} from "use-sidecar";

import 'react-focus-lock/sidecar';
import 'react-remove-scroll/sidecar';

import {Effect} from './Effect';
import {effectCar} from "./medium";

export default exportSidecar(effectCar, Effect);