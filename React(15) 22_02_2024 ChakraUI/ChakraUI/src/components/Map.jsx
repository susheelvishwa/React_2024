import { AspectRatio } from "@chakra-ui/react";

const Map = () => {
  const latitude = 23.2813;
  const longitude = 77.4567;

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.571929507157!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c698a8bb5f9f7%3A0xa9e6f1bc2b9bc1f!2sLIG%2090%20M%20Sector%2C%20Ayodhya%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1623323364769!5m2!1sen!2sin`;

  return (
    <AspectRatio ratio={8 / 4}>
      <iframe
        src={mapSrc}
        width="200"
        height="200"
        style={{ border: 5 }}
        allowFullScreen=""
        loading="lazy"
      />
    </AspectRatio>
  );
};

export default Map;
