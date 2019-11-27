
import { DinnerCategory } from './DinnerCategory';
import { SpecialNeed } from './SpecialNeed';
import { DeliveryType } from './DeliveryType';

export class MenuItem {
    id: String;
    title: string;
    description: string;
    isActive: boolean;
    addressLine1: string;
    addressLine2: string;
    zipCode: string;
    state: string;
    city: string;
    availableQuantity: number;
    costPerItem: number;
    imageUri: string;
    startDate: number;
    endDate: number;
    closeDate: number;
    categories: DinnerCategory[];
    specialNeeds: SpecialNeed[];
    deliveries: DeliveryType[];
    startDateStr: string;
    endDateStr: string;
    closeDateStr: string;
}