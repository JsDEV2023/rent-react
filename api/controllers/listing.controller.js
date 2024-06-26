import Listing from "../models/listing.model.js"
import { errorHadler } from "../utils/error.js"

export const createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body)
        return res.status(201).json(listing)
    } catch (err) {
        next(err)
    }
}

export const deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id)

    if (!listing) {
        return next(errorHadler(404, 'Listing not found!'))
    }

    if (req.user.id !== listing.userRef) {
        return next(errorHadler(401, 'You can only delete your own listings!'))
    }

    try {
        await Listing.findByIdAndDelete(req.params.id)
        res.status(200).json('Listing has been deleted!')
    } catch (err) {
       next(err) 
    }
}

export const updateListing = async (req, res, next) => {
    const listing = await Listin.findById(req.params.id)

    if (!listing) {
        return next(404, 'Listing not found!')
    }

    if (req.user.id !== listing.userRef) {
        return next(errorHadler(401, 'You can only update your own listing!'))
    }

    try {
        const updateListing = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        res.status(200).json(updateListing)
    } catch (err) {
        next(err)
    }
}