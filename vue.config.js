const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: process.env.NODE_ENV === 'production' ? '/ecs-arraybuffer/' : '/',
	configureWebpack: {        
		devServer: {
			headers: {
				'Cross-Origin-Opener-Policy': 'same-origin',
				'Cross-Origin-Embedder-Policy': 'require-corp'
			}
		}
	}
});
