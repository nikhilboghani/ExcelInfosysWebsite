import { Typography, Avatar, Rating } from "@material-tailwind/react";
 
export function RatingWithComment() {
  return (
    <div className="px-8 text-center">
      <Typography variant="h2" color="blue-gray" className="mb-6 text-2xl">
        &quot;Excellent service and very good nature of the owner. Will guide you properly.&quot;
      </Typography>
     
      <Typography variant="h6" className="mt-4 text-2xl mb-2">
      - WEGA B
      </Typography>
      <Rating value={5} readonly />
      <br/>
      <br/>
      <br/>


      <Typography variant="h2" color="blue-gray" className="mb-6 text-2xl">
        &quot;
            One stop solutions for laptops purchase and reaping. Visit one time so you never go any other place for laptop repair and services.&quot;
      </Typography>
     
      <Typography variant="h6" className="mt-4 text-2xl mb-2">
      - sagar p
      </Typography>
      <Rating value={5} readonly />
 <br/>
      <br/>
      <br/>

         <Typography variant="h2" color="blue-gray" className="mb-6 text-2xl">
        &quot; 
         Excellent service at reasonable price. I highly recommend for computer & laptop services and accessories.&quot;
      </Typography>
     
      <Typography variant="h6" className="mt-4 text-2xl mb-2">
     - Dharmesh P
      </Typography>
      <Rating value={5} readonly />
      <br/>
      <br/>
      <br/>


    </div>

  );
}
export default RatingWithComment;