import * as uuid from "uuid"
import * as path from "path"

class FileService {
	saveFile() {
		try {
			const fileName = uuid.v4() + '.jpg'
			const filePath = path.resolve('static', fileName)
			fileName.mv(filePath)
			return fileName
		} catch (err) {
			console.log("FileService error", err)
		}
	}
	getFilePath(fileName) {
		return path.resolve('static', fileName);
	}
}

export default new FileService