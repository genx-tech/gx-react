import CardList from '../components/CardList';
import TaskList from '../models/TaskList';
import { saveConnect } from '../../../src';

export default saveConnect(TaskList, CardList);