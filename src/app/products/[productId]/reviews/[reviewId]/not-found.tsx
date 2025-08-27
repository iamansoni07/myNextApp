"use client";

import { usePathname } from "next/navigation";
import { use } from "react";

export default function notFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];

    return (
        <div>
            <h1>404 - Review Not Found</h1>
            <h1>Cannot find the review {reviewId} for product {productId}</h1>
        </div>
    );
}



// export default function notFound() {
//     return (
//         <div>
//             <h1>404 - Review Not Found</h1>
//         </div>
//     );
// }