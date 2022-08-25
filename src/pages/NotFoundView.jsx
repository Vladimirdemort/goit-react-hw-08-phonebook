export default function NotFoundView({ errorImage, message }) {
  return (
    <div role="alert">
      <img src={errorImage} alt="Error 404" />
      <p>{message}</p>
    </div>
  );
}
