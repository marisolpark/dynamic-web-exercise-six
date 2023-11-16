import CreateUserForm from "@/app/components/CreateUserForm";
import Header from "@/app/components/Header";

export default function CreateUser() {
    return(
        <>
            <Header />
            <main>
                <h1>Create User</h1>
                <CreateUserForm />
            </main>
        </>
    );
}