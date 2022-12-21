const resolvers = {
	Query: {
		hello: (_, __, contextValue) => {
			console.log(contextValue);
			return "hello world";
		}
	},
};

export default resolvers;