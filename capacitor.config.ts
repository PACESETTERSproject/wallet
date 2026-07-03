import { CapacitorConfig } from '@capacitor/cli';

let config: CapacitorConfig;
const defaultConfig: CapacitorConfig = {
	appId: 'com.pacesetters.wallet',
	appName: 'Pacesetters Wallet',
	webDir: 'build',
	server: {
		androidScheme: 'http',
		cleartext: true
	},
	plugins: {
		Keyboard: {
			resizeOnFullScreen: false
		}
	},
	ios: {
		scheme: 'Pacesetters',
		webContentsDebuggingEnabled: true
	}
};
if (process.env.ANDROID) {
	config = defaultConfig;
} else {
	config = { ...defaultConfig, plugins: { CapacitorHttp: { enabled: true } } };
}

export default config;
