import PageContent from "../components/PageContent";
import NewsletterSignup from "../components/NewsletterSignup";

const NewsLetterPage = () => {
  return (
    <PageContent title="Subscribe to our news">
      <NewsletterSignup />
    </PageContent>
  );
};

export default NewsLetterPage;

export async function newsAction ({request}) {
    const data = await request.formData();
    const email = data.get('email');

    console.log(email);
    return { message: 'Singup successful!' };
}