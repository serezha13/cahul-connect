import { stores } from "@/apps/stores/mock-data";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Form: NextPage = () => {
	const router = useRouter();
	const {id} = router.query;

	const store = stores.find(item => item.id === Number(id));



	return (
		<div>
			<img src={store?.img || ''} height={160}></img>
  		<h2 className="text-2xl font-semibold mb-4">{store?.name}</h2>
  		<div className="mb-2">
    	<strong className="text-gray-700">Telephone:</strong>
    	<span className="ml-2">{store?.tel}</span>
  	</div>
  <div className="mb-2">
    <strong className="text-gray-700">Working Hours:</strong>
    <span className="ml-2">{store?.workingHours}</span>
  </div>
  <div className="mb-4">
    <strong className="text-gray-700">Address:</strong>
    <span className="ml-2">{store?.address}</span>
  </div>
	{
		store?.link &&
		<div className="mb-2">
    <strong className="text-gray-700">Website:</strong>
    <a
      href={store?.link}
      className="text-blue-500 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {store?.link}
    </a>
  </div>
	}
	<div dangerouslySetInnerHTML={{__html: store?.__html || ''}}/>
</div>

	)
}

export default Form;