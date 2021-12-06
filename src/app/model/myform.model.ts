export interface MyFormFields {
	field_name: string;
	field_type: "text" | "number" | "date" | "button";
}

export interface MyForm{
	id?: string,
	name: string;
	fields: MyFormFields[];
}