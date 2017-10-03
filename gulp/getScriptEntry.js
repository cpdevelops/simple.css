import config from './config';
import path from 'path';

export default function(taskConfig) {
    let entry = [];

    taskConfig.entry.forEach(entryPoint => {
        entry.push(
            path.join(
                config.root.src,
                taskConfig.paths.src,
                entryPoint
            )
        )
    });

    return entry;
}
