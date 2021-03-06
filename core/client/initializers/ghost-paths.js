import ghostPaths from 'ghost/utils/ghost-paths';

export default {
    name: 'ghost-paths',

    initialize: function (container) {
        container.register('ghost:paths', ghostPaths(), {instantiate: false});

        container.injection('route', 'ghostPaths', 'ghost:paths');
        container.injection('model', 'ghostPaths', 'ghost:paths');
        container.injection('controller', 'ghostPaths', 'ghost:paths');
    }
};