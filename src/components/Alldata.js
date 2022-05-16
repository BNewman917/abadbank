import { UseCard } from "./partials/UseCard";

export const AllData = ({ context }) => {
    return context.users?.map((user, i) => (
        <UseCard
            key={i}
            header="User Data"
            body={
                <>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                    <p>Balance: ${user.balance.toLocaleString("en-US")}</p>
                </>
            }
        />
    ));
};
