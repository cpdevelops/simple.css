import config from './config';
import path from 'path';

export default function(taskName) {
    const task = config.tasks[taskName];

    return {
        task: task,
        addons: task.addons,
        paths: {
            src: path.join(
                config.root.src,
                task.paths.src,
                `/**/*.{${task.extensions}}`
            ),
            dest: path.join(
                config.root.dest,
                task.paths.dest
            )
        }
    }
}
