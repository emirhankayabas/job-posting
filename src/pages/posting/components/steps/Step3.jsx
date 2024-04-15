import TextEditor from "~/components/Form/TextEditor";

export default function Step3() {
    return (
        <div className="flex flex-col gap-y-8">
            <TextEditor name="position_description" />
        </div>
    )
}
