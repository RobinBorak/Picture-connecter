export class ConnectPicture {
  id: number;
  name: string;
  description: string;
  image: string;
	related: related[];
}
class related{
	picture: id[];
}
class id{
	id: number
}


  /*
  pictures: { id: number, name: string, description: string, image: string, related: relatedAr }[] = [
		{
			"id": 1,
			"name": "House",
			"description": "In a house lives a mouse",
			"image": "base64longstring",
			"related": [
				{
					"picture": {
						"id": 2
					}
				}
			]
		},
		{
			"id": 2,
			"name": "Mouse",
			"description": "This is the mouse",
			"image": "base64longstring",
			"related": [
				{
					"picture": {
						"id": 1
					}
				}
			]
		}
	];
  */