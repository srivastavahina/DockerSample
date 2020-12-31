
//const sql = require('mssql');

//module.exports = function () {
//  return {
//		poolConfig: {
//			min: 0,
//			max: 20,
//			log: false,
//			idleTimeout: 30000
//		},
//		connectionConfig:{
//			//userName: 'admin',
//			//password: 'sa',
//			//server: 'localhost', 
//			//port: '1433',
//			//options: {
//			//	database: 'demoDB', 
//			//	instanceName: 'SQLEXPRESS',
//			//	useColumnNames: true,
//			//	//trustedConnection: true,

//			//	//trustedConnection: true,
//			//	useUTC: true

//			userName: 'admin',
//			password: 'sa',
//			server: 'localhost',
//			database: 'test',
//			options: { encrypt: false },
			
//			}  
//		}
//  };
////}

module.exports = function () {
	return {
		poolConfig: {
			min: 0,
			max: 20,
			log: false,
			idleTimeout: 30000
		},
		connectionConfig: {
			userName: 'admin',
			password: 'sa',
			server: 'localhost',
			options: {
				database: 'test',
				instanceName: 'SQLEXPRESS',
				useColumnNames: true // Lookup by column name instead of index
			}
		}
	};
}