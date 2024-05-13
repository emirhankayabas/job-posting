import { Link } from "react-router-dom";
import employersHomeSvg from "~/assets/images/employers-home.svg";
import Button from "~/components/Form/Button";
import Text from "~/components/Text";
import Title from "~/components/Title";

export default function EmptyJobPostings() {
    return (
        <div className="flex items-center flex-col gap-y-4 justify-center mt-10">
            <img src={employersHomeSvg} alt="İş ilanı yok" className="h-full" />
            <Title variant="h3">4 kata kadar daha fazla başvuru alın. İlk iş ilanınızı doğrudan yayınlayın.</Title>
            <div className="text-center"><Text variant="medium">Başvuruları kariyer web sitesinize yönlendirmeye kıyasla dört kata kadar daha fazla başvuru alın. Başvurmayı kolaylaştırın ve daha hızlı işe alım yapın.</Text></div>
            <div>
                <Button>
                    <Link to="/employers/posting">İş İlanı yayınla</Link>
                </Button>
            </div>
        </div>
    )
}
