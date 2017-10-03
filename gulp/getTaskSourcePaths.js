import config from './config';
import path from 'path';

export default function() {
    let paths = {};

    Object.keys(config.tasks).forEach(task => {
        const taskProps = config.tasks[task];

        if (taskProps.hasOwnProperty('paths')) {
            paths[task] = path.join(config.root.src, config.tasks[task].paths.src);
        }
    });

    return paths;
}
