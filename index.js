function Module(config){
	let App = {};

	const makeRequire = (module) => {
		console.log(module);
	}

	const Autoload = {

		then: (module) => {
			makeRequire(module);
			return Autoload;
		},
		finish: () => {
			return App;
		}
	};

	return {
		include: (module) => Autoload.then(module)
	};
}

module.exports = Module;